export type Suppliers = {
    id:          string;
    alias:       string;
    name:        string;
    description: string;
    localityId:  number;
    status:      string;
    createdAt:   Date;
    updatedAt:   Date;
    contacts:    Contact[];
    calendars:   Calendar[];
    locality:    Locality;
    medias:      Media[];
}

export type Calendar = {
    id:         string;
    name:       Name;
    supplierId: string;
    createdAt:  Date;
    updatedAt:  Date;
    months:     Region[];
}

export type Region = {
    name:        string;
    calendarId?: string;
    createdAt:   Date;
    updatedAt:   Date;
    id?:         number;
}

export enum Name {
    Production = "PRODUCTION",
    SampleOrder = "SAMPLE_ORDER",
    SupplierVisit = "SUPPLIER_VISIT",
}

export type Contact = {
    id:         string;
    type:       string;
    value:      string;
    supplierId: string;
    createdAt:  Date;
    updatedAt:  Date;
}

export type Locality = {
    id:        number;
    name:      string;
    regionId:  number;
    createdAt: Date;
    updatedAt: Date;
    region:    Region;
}

export type Media = {
    id:         string;
    category:   Category;
    type:       Type;
    url:        string;
    supplierId: string;
    position:   number;
    createdAt:  Date;
    updatedAt:  Date;
}

export enum Category {
    Banner = "BANNER",
    Facility = "FACILITY",
    Logo = "LOGO",
    Presentation = "PRESENTATION",
}

export enum Type {
    Picture = "PICTURE",
    Video = "VIDEO",
}
