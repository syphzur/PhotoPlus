package pl.polsl.photoplus.controllers.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import pl.polsl.photoplus.model.dto.AbstractModelDto;
import pl.polsl.photoplus.security.services.PermissionEvaluatorService;
import pl.polsl.photoplus.services.controllers.AbstractModelService;
import pl.polsl.photoplus.services.controllers.ModelService;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

/**
 * Basic controller for model object responsible for handling standard operations on objects.
 * Handled operations should be provided in equivalent service which implements given interface.
 *
 * @param <T> Typ of DTO for given controller.
 * There needs to be created dtoService for given object to make it work.
 *
 * @see ModelService
 */
@Validated
public abstract class BaseModelController<T extends AbstractModelDto, S extends AbstractModelService<?,T,?>>
{
    protected final String authorizationPrefix;

    protected String DELETE_RELATION_NAME = "delete";

    protected final PermissionEvaluatorService permissionEvaluatorService;

    /**
     * Service needs to be injected manually by calling super class constructor
     */
    protected S dtoService;

    public BaseModelController(final S dtoService, final String authorizationPrefix,
                               final PermissionEvaluatorService permissionEvaluatorService)
    {
        this.dtoService = dtoService;
        this.authorizationPrefix = authorizationPrefix;
        this.permissionEvaluatorService = permissionEvaluatorService;
    }

    /**
     * In this method you should add all relevant links by using HATEOAS
     * Should be invoked at the end of object construction!!
     */
    public abstract void addLinks(final T dto);

    public void addLinks(final Collection<T> dtos)
    {
        dtos.forEach(this::addLinks);
    }

    @GetMapping(path = "all/{page}", produces = {"application/json"})
    @PreAuthorize("@permissionEvaluatorService.hasPrivilege(this.authorizationPrefix, 'all' )")
    public ResponseEntity<List<T>> getAll(@PathVariable("page") final Integer page)
    {
        final List<T> dtos = dtoService.getPageFromAll(page);
        addLinks(dtos);
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping(path = "all", produces = {"application/json"})
    @PreAuthorize("@permissionEvaluatorService.hasPrivilege(this.authorizationPrefix, 'all' )")
    public ResponseEntity<List<T>> getAll()
    {
        final List<T> dtos = dtoService.getAll();
        addLinks(dtos);

        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping(path = "/{code}", produces = {"application/json"})
    @PreAuthorize("@permissionEvaluatorService.hasPrivilege(this.authorizationPrefix, 'single' )")
    public ResponseEntity<T> getSingle(@PathVariable("code") final String code)
    {
        final T dto = dtoService.getSingleObject(code);
        addLinks(dto);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    @PreAuthorize("@permissionEvaluatorService.hasPrivilege(this.authorizationPrefix, 'post' )")
    public ResponseEntity post(@RequestBody @Valid final List<T> dtoSet)
    {
        return new ResponseEntity(dtoService.save(dtoSet));
    }

    @DeleteMapping("/delete/{code}")
    @PreAuthorize("@permissionEvaluatorService.hasPrivilege(this.authorizationPrefix, 'delete' )")
    public ResponseEntity delete(@PathVariable("code") final String code)
    {
        return new ResponseEntity(dtoService.delete(code));
    }

    @PatchMapping("/{code}")
    @PreAuthorize("@permissionEvaluatorService.hasPrivilege(this.authorizationPrefix, 'patch' )")
    public ResponseEntity patch(@RequestBody final T dtoPatch, @PathVariable("code") final String code)
    {
        return new ResponseEntity(dtoService.patch(dtoPatch, code));
    }

    //it is used
    public String getAuthorizationPrefix()
    {
        return authorizationPrefix;
    }

}
