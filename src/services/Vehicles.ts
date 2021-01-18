//Services
import { testPossibleValues } from './index';

interface IVehicle{
    setModel: (model: string) => void,
    getModel: () => string,
    setManufacturingYear: (manufacturingYear: number) => void,
    getManufacturingYear: () => number,
    setDoorsCount?: (doorsCount: number) => number,
    getDoorsCount?: () => number,
    setBrand: (brand: string) => void,
    getBrand: () => string,
    setWheelCount?: (wheelCount: number) => number,
    getWheelCount?: () => number
};

export class Car implements IVehicle {
    private model: string;
    private manufacturingYear: number;
    private brand: string;
    private doorsCount: number;

    constructor(){
        this.model = '';
        this.manufacturingYear = 1886;
        this.brand = '';
        this.doorsCount = 0;
    };

    public setModel = (model: string): void => {
        if(model !== ''){
            this.model = model;
        }
    };

    public getModel = (): string => {
        return this.model;
    };

    public setManufacturingYear = (manufacturingYear: number): void => {
        if(manufacturingYear >= 1886){
            this.manufacturingYear = manufacturingYear;
        }
    };

    public getManufacturingYear = (): number => {
        return this.manufacturingYear;
    };

    public setBrand = (brand: string): void => {
        if(brand !== ''){
            this.brand = brand;
        }
    };

    public getBrand = (): string => {
        return this.brand;
    };
    
    public setDoorsCount = (doorsCount: number): number => {
        const possibleDoorsCount = [2, 4],
              testedPossibleValues = testPossibleValues(possibleDoorsCount, doorsCount);

        if(testedPossibleValues === 1){
            this.doorsCount = doorsCount;
        };

        return testedPossibleValues;
    };

    public getDoorsCount = (): number => {
        return this.doorsCount;
    };
};

export class Motorcycle implements IVehicle {
    private model: string;
    private manufacturingYear: number;
    private brand: string;
    private passengersCount: number;
    private wheelsCount: number;

    constructor(){
        this.model = '';
        this.manufacturingYear = 1885;
        this.brand = '';
        this.passengersCount = 0;
        this.wheelsCount = 0;
    }

    public setModel = (model: string): void => {
        if(model !== ''){
            this.model = model;
        }
    };

    public getModel = (): string => {
        return this.model;
    };

    public setManufacturingYear = (manufacturingYear: number): void => {
        if(manufacturingYear >= 1885){
            this.manufacturingYear = manufacturingYear;
        }
    };

    public getManufacturingYear = (): number => {
        return this.manufacturingYear;
    };

    public setBrand = (brand: string): void => {
        if(brand !== ''){
            this.brand = brand;
        }
    };

    public getBrand = (): string => {
        return this.brand;
    };

    public setPassengers = (passengers: number): number => {
        const possiblePassengersCount = [1, 2],
              testedPossibleValues = testPossibleValues(possiblePassengersCount, passengers);

        if(testedPossibleValues === 1){
            this.passengersCount = passengers;
        };

        return testedPossibleValues;
    };

    public getPassengers = (): number => {
        return this.passengersCount;
    };

    public setWheelCount = (wheelCount: number) => {
        const possibleWheelCount = [2],
              testedPossibleValues = testPossibleValues(possibleWheelCount, wheelCount);

        if(testedPossibleValues === 1){
            this.passengersCount = wheelCount;
        };

        return testedPossibleValues;
    }
    public getWheelCount = () => {
        return this.wheelsCount;
    };
};