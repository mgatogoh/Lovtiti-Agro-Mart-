export type FieldType = "text" | "password" | "textarea" | "select" | "checkbox";

export interface FieldSchema {
    name: string;
    label: string;
    type: FieldType;
    required?: boolean;
    options?: string[];
}

export interface AuthSchema {
    login: FieldSchema[];
    register: FieldSchema[];
}
