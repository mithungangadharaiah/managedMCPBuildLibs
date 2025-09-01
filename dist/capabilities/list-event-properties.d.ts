import { DynatraceEnv } from '../getDynatraceEnv.js';
export declare const listEventProperties: {
    definition: {
        name: string;
        description: string;
        inputSchema: import("zod-to-json-schema").JsonSchema7Type & {
            $schema?: string | undefined;
            definitions?: {
                [key: string]: import("zod-to-json-schema").JsonSchema7Type;
            } | undefined;
        };
    };
    handler: (args: unknown, dtEnv: DynatraceEnv) => Promise<{
        content: {
            type: string;
            text: string;
        }[];
    }>;
};
//# sourceMappingURL=list-event-properties.d.ts.map