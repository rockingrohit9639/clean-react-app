import { type IFieldValidation } from '@/validation/protocols'
import {
  CompareFieldsValidation,
  RequiredFieldValidation,
  EmailFieldValidation,
  MinLengthValidation,
  MatchFieldValidation,
  MaxLengthValidation,
  FileTypeValidation
} from '@/validation/validators'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: IFieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailFieldValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  max (length: number): ValidationBuilder {
    this.validations.push(new MaxLengthValidation(this.fieldName, length))
    return this
  }

  sameAs (fieldToCompare: string): ValidationBuilder {
    this.validations.push(
      new CompareFieldsValidation(this.fieldName, fieldToCompare)
    )
    return this
  }

  match (
    pattern: RegExp,
    ignoreCase: boolean = false,
    message?: string
  ): ValidationBuilder {
    this.validations.push(
      new MatchFieldValidation(this.fieldName, pattern, ignoreCase, message)
    )
    return this
  }

  fileType (allowedFileExtensions: string[]): ValidationBuilder {
    this.validations.push(
      new FileTypeValidation(this.fieldName, allowedFileExtensions)
    )
    return this
  }

  build (): IFieldValidation[] {
    return this.validations
  }
}
