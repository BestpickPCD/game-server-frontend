import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => <SwaggerUI url={`${window.location.origin}/swagger/api-docs.yaml`} />