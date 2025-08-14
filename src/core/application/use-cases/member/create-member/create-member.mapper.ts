import { Role } from 'src/core/domain/valueObjects/role.valueobject';
import { Element } from 'src/core/domain/valueObjects/element.valueobject';
import { CreateMemberRequest } from './create-member.request';

export const toDomainRole = (r: CreateMemberRequest['role'] | string): Role => {
  switch (r.toUpperCase()) {
    case 'PARTICIPANT':
      return Role.Participant;
    case 'LEADER':
      return Role.Leader;
    case 'GUIDE':
      return Role.Guide;
    default:
      throw new Error(`Invalid role: ${r}`);
  }
};

export const toDomainElement = (
  r: CreateMemberRequest['element'] | string,
): Element => {
  switch (r.toUpperCase()) {
    case 'FIRE':
      return Element.FIRE;
    case 'WATER':
      return Element.WATER;
    case 'GROUND':
      return Element.GROUND;
    case 'WIND':
      return Element.WIND;
    default:
      throw new Error(`Invalid element: ${r}`);
  }
};

// export const toMemberResponse = (m: MemberDomain): CreateMemberResponse => ({
//   firstName: m.firstName,
//   lastName: m.lastName,
//   role: m.role,
//   element: m.element,
//   birthDate: m.birthDate.toISOString(),
// });
