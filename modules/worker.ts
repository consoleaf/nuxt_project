import { Module } from '@nuxt/types'
import { DI } from '../orm';

interface ModuleOptions {}

const workerModule: Module<ModuleOptions> = async function(moduleOptions) {
  if (!(this.options.dev || this.options._start)) return;

  console.log("Worker module initialized!")

  const di = await DI.getInstance()

  console.log("DI initialized!")
}


export default workerModule;
