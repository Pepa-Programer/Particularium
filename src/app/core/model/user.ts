export class User {
    private _name: string;
    private _lastname: string;
    private _password: string;
    private _location: Coordinates;
    private _email: string;


    constructor(name: string, lastname: string, password: string, location: Coordinates, email: string) {
        this._name = name;
        this._lastname = lastname;
        this._password = password;
        this._location = location;
        this._email = email;
    }


    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter lastname
     * @return {string}
     */
    public get lastname(): string {
        return this._lastname;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }


    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter lastname
     * @param {string} value
     */
    public set lastname(value: string) {
        this._lastname = value;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }


    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }


    /**
     * Getter location
     * @return {Coordinates}
     */
	public get location(): Coordinates {
		return this._location;
	}

    /**
     * Setter location
     * @param {Coordinates} value
     */
	public set location(value: Coordinates) {
		this._location = value;
	}


}