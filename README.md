## Shared UKRI components

Install using `yarn add github:urkiorg/ukripoc-components`, and update with
`yarn add github:urkiorg/ukripoc-components --force`

### Usage

```tsx
import { UkriHeader } from "ukripoc-components";

const routes = {
    Home: "/"
}

//...

<UkriHeader routes={routes} />

```

You can also import theme constants:

```tsx
import { ukriGreen } from "ukripoc-components";
```

### Development

Run `yarn build` to compile. This also runs automatically on pre-commit. `dist`
is committed for ease of install by yarn.
