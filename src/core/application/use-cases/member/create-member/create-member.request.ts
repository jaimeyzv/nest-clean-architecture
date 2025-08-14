import { Transform, Type } from 'class-transformer';
import {
  IsDateString,
  IsIn,
  IsISO8601,
  IsNotEmpty,
  IsString,
} from 'class-validator';

const ROLE_VALUES = ['PARTICIPANT', 'LEADER', 'GUIDE'] as const;
const ELEMENT_VALUES = ['WATER', 'FIRE', 'WIND', 'GROUND'] as const;

// helper to normalize strings
const upperTrim = (v: unknown) =>
  typeof v === 'string' ? v.trim().toUpperCase() : v;

export class CreateMemberRequest {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @Transform(({ value }) => upperTrim(value))
  @IsIn(ROLE_VALUES, {
    message: `role must be one of: ${ROLE_VALUES.join(' | ')}`,
  })
  role!: string;

  @Transform(({ value }) => upperTrim(value))
  @IsIn(ELEMENT_VALUES, {
    message: `element must be one of: ${ELEMENT_VALUES.join(' | ')}`,
  })
  element!: string;

  @IsDateString(
    { strict: true },
    { message: 'birthDate must be an ISO-8601 date string' },
  )
  birthDate!: string;
}
