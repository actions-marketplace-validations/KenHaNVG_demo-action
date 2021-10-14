import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const number: string = core.getInput('PullRequestNumber')
    core.setOutput('PullRequestNumber: ', number)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
