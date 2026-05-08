import fs from "node:fs/promises";
import path from "node:path";
import CONSTANTS from "../../bootstrap/config.js";

export const EnvironmentController = async (req, res) => {
  try {
    const isDocker = process.env.IS_DOCKER === "true";

    const response = {
      environment: isDocker ? "docker" : "local",
      database: {
        host: isDocker ? "postgres_host" : "localhost", 
        port: isDocker ? 5432 : 6789
      },
      web: {
        host: "localhost", 
        port: isDocker ? 8080 : 3000
      }
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
