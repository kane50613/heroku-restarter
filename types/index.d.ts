declare module "heroku-restarter" {
    export default function(token: string, appName: string): Restarter
}

export interface Dyno {
    attach_url?: string
    command: string
    created_at: string
    id: string
    name: string
    size: string
    state: string
    type: string
    updated_at: string
    app: App
    release: Release
}

export interface App {
    id: string
    name: string
}

export interface Release {
    id: string
    version: string
}

export class Restarter {
    public constructor(token: string, appName: string)

    public list(): Promise<Dyno[]>
    public restart(id?: string): Promise<any>
}
