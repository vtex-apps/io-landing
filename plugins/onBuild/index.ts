import { TransformOptions } from '@babel/core'
import { BuildTarget, OnBuildPlugin } from '@vtex/micro'

export default class OnBuild extends OnBuildPlugin {
  public getConfig = async (previous: TransformOptions, target: BuildTarget): Promise<TransformOptions> => {
    return previous
  }
}
