package br.com.bragantini.adoteumpet.api.pet.validators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy =  PetExistsByIdValidator.class)
public @interface PetExistsById {
    String message() default "Pet com id ${validatedValue} não existe";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default {};
}
