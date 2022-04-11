# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Function <a name="Function" id="cdktf-aws-lambda.Function"></a>

#### Initializers <a name="Initializers" id="cdktf-aws-lambda.Function.Initializer"></a>

```typescript
import { Function } from 'cdktf-aws-lambda'

new Function(scope: Construct, name: string, props: FunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-aws-lambda.Function.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-aws-lambda.Function.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-aws-lambda.Function.Initializer.parameter.props">props</a></code> | <code><a href="#cdktf-aws-lambda.FunctionProps">FunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-aws-lambda.Function.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-aws-lambda.Function.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktf-aws-lambda.Function.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktf-aws-lambda.FunctionProps">FunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-aws-lambda.Function.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-aws-lambda.Function.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-aws-lambda.Function.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-aws-lambda.Function.isConstruct"></a>

```typescript
import { Function } from 'cdktf-aws-lambda'

Function.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-aws-lambda.Function.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-aws-lambda.Function.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-aws-lambda.Function.property.stack">stack</a></code> | <code>cdktf.TerraformStack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-aws-lambda.Function.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdktf-aws-lambda.Function.property.stack"></a>

```typescript
public readonly stack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

The stack in which this resource is defined.

---


## Structs <a name="Structs" id="Structs"></a>

### FunctionProps <a name="FunctionProps" id="cdktf-aws-lambda.FunctionProps"></a>

#### Initializer <a name="Initializer" id="cdktf-aws-lambda.FunctionProps.Initializer"></a>

```typescript
import { FunctionProps } from 'cdktf-aws-lambda'

const functionProps: FunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-aws-lambda.FunctionProps.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-aws-lambda.FunctionProps.property.runtime">runtime</a></code> | <code><a href="#cdktf-aws-lambda.Runtimes">Runtimes</a></code> | *No description.* |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="cdktf-aws-lambda.FunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="cdktf-aws-lambda.FunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtimes;
```

- *Type:* <a href="#cdktf-aws-lambda.Runtimes">Runtimes</a>

---

## Classes <a name="Classes" id="Classes"></a>

### Foo <a name="Foo" id="cdktf-aws-lambda.Foo"></a>

#### Initializers <a name="Initializers" id="cdktf-aws-lambda.Foo.Initializer"></a>

```typescript
import { Foo } from 'cdktf-aws-lambda'

new Foo()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-aws-lambda.Foo.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayHello` <a name="sayHello" id="cdktf-aws-lambda.Foo.sayHello"></a>

```typescript
public sayHello(): string
```





## Enums <a name="Enums" id="Enums"></a>

### Runtimes <a name="Runtimes" id="cdktf-aws-lambda.Runtimes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-aws-lambda.Runtimes.DOTNETCORE31">DOTNETCORE31</a></code> | *No description.* |

---

##### `DOTNETCORE31` <a name="DOTNETCORE31" id="cdktf-aws-lambda.Runtimes.DOTNETCORE31"></a>

---

