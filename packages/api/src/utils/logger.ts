import { createLogger, transports, format} from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.label({ label: 'server' }),
    format.json(),
    format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
    format.printf(({ level, message, label, timestamp,  }) => {
      return `[${label}:${level}] ${message} (${timestamp})`;
    })
  ),
  transports: new transports.Console({
    format: format.colorize()
  })
})
