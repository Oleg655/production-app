import { BuildOption } from "./types/config";
import type { Configuration as DevserverConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOption): DevserverConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}
