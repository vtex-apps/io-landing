import { OnAssemblePlugin } from '@vtex/micro'
import { htmlTags, purgeCSS } from '@vtex/micro-css'
import {
  Block,
  Context,
  defineConstants,
  group
} from 'webpack-blocks'

export default class OnAssemble extends OnAssemblePlugin {
  public getConfig = async (config: Block<Context>): Promise<Block<Context>> => {
    const block: Block<Context>[] = [
      purgeCSS({
        whitelist: () => htmlTags
      }),
      defineConstants({
        global: {}
      })
    ]

    return group([
      config,
      ...block
    ])
  }
}
