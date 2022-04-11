import { Resource } from "cdktf";
import { Construct } from "constructs";

export enum Runtimes {
  DOTNETCORE31 = "dotnetcore3.1",
}

export interface FunctionProps /*extends Omit<{}, "runtime">*/ {
  readonly runtime?: Runtimes;
  readonly functionName?: string | undefined;
}

export class Function extends Resource {
  constructor(scope: Construct, name: string, props: FunctionProps) {
    super(scope, name);
    this.validation(props);

    console.log("REMOVEME: just a bump");

    // const { functionName, runtime } = props;

    // new LambdaFunction(scope, "LambdaFunction", {
    //   ...props,
    //   functionName,
    //   runtime: runtime,
    // });
  }

  private validation(props: FunctionProps): void {
    this.validateFunctionName(props);
  }

  private validateFunctionName(props: FunctionProps): void {
    if (props?.functionName == undefined) {
      throw new Error(`Function name must be defined`);
    }

    if (!/^[a-zA-Z0-9-_]+$/.test(props?.functionName)) {
      throw new Error(
        `Function name ${props.functionName} can contain only letters, numbers, hyphens, or underscores with no spaces.`
      );
    }
  }
}

export class Foo {
  public sayHello() {
    return "hello, world!";
  }
}
