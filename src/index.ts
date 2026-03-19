import {PluginInterface} from "@/lib/plugin-engine/plugin-interface"
import HelloWorldComponent from "./PluginComponent"

const index: PluginInterface = {
    id: "hello-world-plugin",
    initPlugin: HelloWorldComponent,
}

export default index