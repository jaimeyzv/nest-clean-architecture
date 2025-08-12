import { Role } from '../valueObjects/role.valueobject';
import { Element } from '../valueObjects/element.valueobject';

export class MemberDomain {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public element: Element,
    public role: Role,
    public birthDate: Date,
  ) {}

  CreataParticipant() {
    this.role = Role.Participant;
  }

  CreataGuide() {
    this.role = Role.Guide;
  }

  CreataLeader() {
    this.role = Role.Leader;
  }

  AssignFire() {
    this.element = Element.FIRE;
  }

  AssignWater() {
    this.element = Element.WATER;
  }

  AssignGround() {
    this.element = Element.GROUND;
  }

  AssignWind() {
    this.element = Element.WIND;
  }
}
