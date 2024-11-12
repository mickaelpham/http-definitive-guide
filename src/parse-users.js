const VALID_USER_ENV_LENGTH = 2

/**
 * Return an object of { [username]: password } tuples or
 * an empty array if anything went awry.
 */
export function parseUsers(data) {
  if (!data)
    return {}

  const users = data
    .split(',')
    .map(userEnv => userEnv.split(':'))

  const isValid = users.every(user => user.length === VALID_USER_ENV_LENGTH)

  return isValid ? Object.fromEntries(users) : {}
}
