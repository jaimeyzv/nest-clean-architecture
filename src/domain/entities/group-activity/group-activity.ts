export class GroupActivity {
  constructor(
    public readonly GroupActivityId: number,
    public readonly Name: string,
    public readonly Description: string,
    public readonly Date: Date,
    public readonly Place: string,
    public readonly UserId: number,
  ) {}
}
