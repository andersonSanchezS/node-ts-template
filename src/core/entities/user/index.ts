
export interface User {
    uIdAuto: number;
    uId: string;
    uFirstName?: string;
    uLastName?: string;
    uEmail?: string;
    uUserName?: string;
    uPassword?: string;
    uState?: number;
    uSuperUser?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}