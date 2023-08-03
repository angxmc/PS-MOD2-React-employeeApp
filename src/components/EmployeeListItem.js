function EmployeeListItem(props) {
  const { name, company, title } = props.contact;
  return (
    <div>
      <h5>{name}</h5>
      <p>{company}</p>
      <p>{title}</p>
    </div>
  );
}
export default EmployeeListItem;
