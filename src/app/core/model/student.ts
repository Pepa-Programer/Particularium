import { User } from "./user";
import { Geoposition } from '@ionic-native/geolocation';

export class Student extends User {
    private demands: Array<Demand>;


    constructor($demands: Array<Demand>,$name: string, $lastname: string, $password: string, $location: Coordinates, $email: string) {
        super($name,$lastname,$password,$location,$email);
        
        this.demands = $demands;
    }


    /**
     * Getter $demands
     * @return {Array<Demand>}
     */
    public get $demands(): Array<Demand> {
        return this.demands;
    }

    /**
     * Setter $demands
     * @param {Array<Demand>} value
     */
    public set $demands(value: Array<Demand>) {
        this.demands = value;
    }


}