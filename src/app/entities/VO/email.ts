import { EntitieError } from '@app/errors/entities';
import { EntitiesEnum } from '../entities';

export class Email {
	constructor(private readonly _value: string) {
		if (_value.length > 255 || _value.length < 7)
			throw new EntitieError({
				entity: EntitiesEnum.vo,
				message: 'Incorrect range of length in Email value.',
			});
	}

	public equalTo(input: Email) {
		return input.value() === this._value;
	}

	public value(): string {
		return this._value;
	}
}
