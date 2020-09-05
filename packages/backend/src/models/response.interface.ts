export interface ResponseModel {
    success: boolean;
}

export class ResponseError implements ResponseModel {
    success: boolean;
    errorCode: string;
    errorMessage?: string;
    error: any;

    constructor(code: string, message?: string, error?: any) {
        this.success = false;
        this.errorCode = code;
        this.errorMessage = message;
        this.error = error;

        if (this.errorCode === 'request_failed' && this.error && this.error.errorCode) {
            this.errorCode = this.error.errorCode;
        }
    };
}

export class ResponseSuccess<T = any> implements ResponseModel {
    success: boolean;
    message: string;
    data: T;

    constructor(data?: T, message?: string) {
        this.success = true;
        this.message = message;
        this.data = data;
    };
}
