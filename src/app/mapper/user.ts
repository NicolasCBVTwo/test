import { CPF } from '@app/entities/VO/CPF';
import { Email } from '@app/entities/VO/email';
import { Level } from '@app/entities/VO/level';
import { Name } from '@app/entities/VO/name';
import { Password } from '@app/entities/VO/password';
import { PhoneNumber } from '@app/entities/VO/phoneNumber';
import { User } from '../entities/user';

interface IConvertToObject {
	id?: string;
	name: string;
	email: string;
	password: string;
	CPF: string;
	phoneNumber: string;
	level: number;
	condominiumId: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export class UserMapper {
	static toClass(input: IConvertToObject): User {
		return new User(
			{
				name: new Name(input.name),
				email: new Email(input.email),
				password: new Password(input.password),
				CPF: new CPF(input.CPF),
				phoneNumber: new PhoneNumber(input.phoneNumber),
				level: new Level(input.level),
				condominiumId: input.condominiumId,
				createdAt: input.createdAt,
				updatedAt: input.updatedAt,
			},
			input.id,
		);
	}

	static toObject(input: User): IConvertToObject {
		return {
			id: input.id,
			name: input.name.value(),
			email: input.email.value(),
			password: input.password.value(),
			CPF: input.CPF.value(),
			phoneNumber: input.phoneNumber.value(),
			level: input.level.value(),
			condominiumId: input.condominiumId,
			createdAt: input.createdAt,
			updatedAt: input.updatedAt,
		};
	}
}
