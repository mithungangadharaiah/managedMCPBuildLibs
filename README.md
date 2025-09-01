# Dynatrace Managed Events MCP Server

A Model Context Protocol (MCP) server that provides comprehensive access to Dynatrace Managed environments, including events, problems, entities, metrics, and more.

## Features

This MCP server provides 39+ tools for interacting with Dynatrace Managed environments:

### Problem Management
- List and filter problems
- Get detailed problem information
- Add, update, and delete comments
- Close problems

### Entity Management
- List and search monitored entities
- Get detailed entity information
- Find entities by name and type
- Manage entity tags (add/delete)

### Events & Monitoring
- List and filter events
- Get event details and properties
- Ingest custom events
- Monitor entity states

### Metrics & Data
- Query metric data points
- List available metrics
- Ingest custom metrics
- Delete metrics

### Security & Compliance
- List security vulnerabilities
- Get vulnerability details
- Audit log access

### Custom Devices
- Create custom monitoring devices
- Manage device properties

## Prerequisites

- Node.js >= 18.0.0
- Access to a Dynatrace Managed environment
- Valid Dynatrace API token with appropriate permissions

## Installation & Setup

### 1. Clone and Install Dependencies

```bash
# Dependencies are already installed in node_modules
# If needed, run: npm install
```

### 2. Configure Environment Variables

Copy the example environment file and fill in your credentials:

```bash
copy .env.example .env
```

Edit `.env` with your Dynatrace configuration:

```env
# Dynatrace Managed Configuration
DYNATRACE_MANAGED_URL=https://your-dynatrace-managed-instance.com
DYNATRACE_ENVIRONMENT_ID=your-environment-id
DYNATRACE_API_TOKEN=your-api-token

# Optional Configuration
REQUEST_TIMEOUT=30000
MAX_RETRIES=3
LOG_LEVEL=info
```

### 3. Configure MCP Client

Add this server to your MCP client configuration (`.vscode/mcp.json`):

```json
{
  "servers": {
    "dynatrace-managed-events": {
      "command": "node",
      "args": ["dist/index.js"]
    }
  }
}
```

## Usage

### Running the Server

**Production mode (using built files):**
```bash
npm start
# or directly:
node dist/index.js
```

**Development mode (if you have source files):**
```bash
npm run dev
```

### Available Commands

The server provides these npm scripts:

- `npm start` - Run the built server
- `npm run dev` - Run in development mode with hot reload
- `npm run build` - Build TypeScript source to JavaScript
- `npm test` - Run tests
- `npm run lint` - Lint the code

## API Token Permissions

Your Dynatrace API token needs the following permissions:

- **Read problems** (`problems.read`)
- **Write problems** (`problems.write`) - for comments and closing
- **Read entities** (`entities.read`)
- **Read and write tags** (`entities.write`)
- **Read events** (`events.ingest`)
- **Write events** (`events.ingest`) - for custom events
- **Read metrics** (`metrics.read`)
- **Write metrics** (`metrics.ingest`) - for custom metrics
- **Read audit logs** (`auditLogs.read`)
- **Read security problems** (`securityProblems.read`)

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DYNATRACE_MANAGED_URL` | Your Dynatrace Managed instance URL | Yes | - |
| `DYNATRACE_ENVIRONMENT_ID` | Environment ID within your managed instance | Yes | - |
| `DYNATRACE_API_TOKEN` | API token with required permissions | Yes | - |
| `REQUEST_TIMEOUT` | HTTP request timeout in milliseconds | No | 30000 |
| `MAX_RETRIES` | Maximum number of retry attempts | No | 3 |
| `LOG_LEVEL` | Logging level (error, warn, info, debug) | No | info |

## Security

- **Never commit credentials** - The `.env` file is git-ignored
- **Use environment-specific tokens** - Create separate tokens for different environments
- **Rotate tokens regularly** - Update API tokens according to your security policy
- **Minimal permissions** - Grant only the permissions your use case requires

## Troubleshooting

### Common Issues

**"DYNATRACE_MANAGED_URL environment variable is required"**
- Ensure your `.env` file exists and contains the required variables
- Check that the `.env` file is in the project root directory

**Connection timeout or network errors**
- Verify your `DYNATRACE_MANAGED_URL` is correct and accessible
- Check if your API token has the required permissions
- Ensure your network allows connections to the Dynatrace instance

**Invalid token errors**
- Verify your `DYNATRACE_API_TOKEN` is correct and not expired
- Check that the token has the necessary permissions for the operations you're trying to perform

### Debug Mode

Enable debug logging by setting:
```env
LOG_LEVEL=debug
```

## Development

### Project Structure

```
├── dist/                    # Built JavaScript files
│   ├── capabilities/        # Individual MCP tools
│   ├── types/              # Type definitions
│   ├── utils/              # Utility functions
│   └── index.js            # Main server entry point
├── .env                    # Environment variables (git-ignored)
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
├── package.json           # Project configuration
└── README.md              # This file
```

### Building

If you have TypeScript source files:
```bash
npm run build
```

## License

MIT License - see LICENSE file for details.

## Support

For issues related to:
- **This MCP server**: Create an issue in this repository
- **Dynatrace API**: Consult the [Dynatrace API documentation](https://www.dynatrace.com/support/help/dynatrace-api)
- **MCP Protocol**: See the [Model Context Protocol documentation](https://modelcontextprotocol.io/)
