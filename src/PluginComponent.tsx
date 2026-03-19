import React from "react"
import {PluginComponent} from "@/lib/plugin-engine/plugin-interface"
import {User} from "@/lib/database/types"

type Props = {
    users: User[]
}

export default {
    getProps: async (api) => {
        const users = await api.getUsers()
        return {users}
    },
    getComponent: function Component({users}) {
        return <div>
            <h2>Team Status</h2>
            {users.length == 0 && <p>No users found.</p>}
            {users.length > 0 && <ul>
                {users.map(user => <li key={user.id}>{user.displayName} ({user.username})</li>)}
            </ul>}
        </div>
    }
} as PluginComponent<Props>