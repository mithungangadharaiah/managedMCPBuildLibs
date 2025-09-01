import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import axios from 'axios';
// Zod schema for input validation
const GetEntityTypeSchema = z.object({
    entityType: z.string().describe('The type of entity to get information about'),
});
// Tool definition
export const getEntityType = {
    definition: {
        name: 'get_entity_type',
        description: 'Get detailed information about a specific entity type',
        inputSchema: zodToJsonSchema(GetEntityTypeSchema),
    },
    handler: async (args, dtEnv) => {
        const parsed = GetEntityTypeSchema.safeParse(args);
        if (!parsed.success) {
            throw new Error(`Invalid arguments: ${parsed.error.message}`);
        }
        try {
            const response = await axios.get(`${dtEnv.url}/e/${dtEnv.environmentId}/api/v2/entityTypes/${parsed.data.entityType}`, {
                headers: {
                    'Authorization': `Api-Token ${dtEnv.apiToken}`,
                    'Content-Type': 'application/json',
                },
            });
            return {
                content: [{
                        type: 'text',
                        text: JSON.stringify(response.data, null, 2),
                    }],
            };
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to get entity type: ${error.response?.status} - ${JSON.stringify(error.response?.data)}`);
            }
            throw error;
        }
    },
};
//# sourceMappingURL=get-entity-type.js.map