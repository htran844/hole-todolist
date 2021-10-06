import { Button } from "react-bootstrap";

export default function Todo({ todo }) {
  return (
    <Button className="w-100 btn-light text-start mt-1">{todo.name}</Button>
  );
}
