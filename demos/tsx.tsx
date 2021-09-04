/* eslint-disable */

type FC<P extends {}> = (props: P) => any;
function useEffect(callback: any, deps: any) {}

class MyClass<T extends {}> {
  readonly field: T;
}
const styled = {div: {} as any}
const s = styled.div`
  background-color: white;
`;

class SuperClass extends MyClass<any> {}

const n = new SuperClass();

export interface ExtendedInterface extends FC<UserCardProps> {
  name: string;
}

/**
 * User card props
 */
export interface UserCardProps {
  age: number;
}

export const SUPER_MS = 2342;

/**
 * User card
 * @returns User card compnent
 */
const UserCard: FC<UserCardProps> = (props) => {
  const { age } = props;
  const username = "Username@name.name";
  const template = `Hello, ${username}!`;
  const reg = /^\d+$/.test("myString123");

  useEffect(() => {
    console.log("my effect");
  }, []);

  return (
    <div>
      {username}
      <p>{template}</p>
    </div>
  );
};

export default UserCard;
