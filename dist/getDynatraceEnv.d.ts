/**
 * Environment configuration for Dynatrace Managed
 * Following SaaS MCP pattern
 */
export interface DynatraceEnv {
    url: string;
    environmentId: string;
    apiToken: string;
}
/**
 * Get Dynatrace environment configuration from environment variables
 */
export declare function getDynatraceEnv(): DynatraceEnv;
//# sourceMappingURL=getDynatraceEnv.d.ts.map