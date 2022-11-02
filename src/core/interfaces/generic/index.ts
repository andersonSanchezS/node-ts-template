/* eslint-disable no-unused-vars */

export interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    bulkCreate(items: T[]): Promise<boolean>;
}

export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
    findByParams(params: T): Promise<T>;
}