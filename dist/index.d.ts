export interface LogSettings {
    showFn: boolean;
    showTimestamp: boolean;
    showFileLine: boolean;
    defaultFilePath: string;
    saveHistory: boolean;
}

export interface LogColors {
    log: string;
    warn: string;
    error: string;
    query: string;
    success: string;
}

export interface LogMethods {
    message(message: string, ...additional: any[]): void;
    warn(message: string, ...additional: any[]): void;
    error(message: string, ...additional: any[]): void;
    success(message: string, ...additional: any[]): void;
    query(message: string, ...additional: any[]): void;
}

export declare class Log {
    static settings: LogSettings;
    static colors: LogColors;
    static new: LogMethods;
}
