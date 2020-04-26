package pl.polsl.photoplus.annotations.validators;

import pl.polsl.photoplus.services.controllers.FieldValueExists;
import pl.polsl.photoplus.validators.ImageValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = ImageValidator.class)
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.PARAMETER})
public @interface Image {
    String message() default "Image is not valid.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    Class<? extends FieldValueExists> service();
}
