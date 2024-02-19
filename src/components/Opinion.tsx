export function Opinion(props: any) {
  const { reviewTitle,review, name } = props;
  return (
    <div>
      <p>{reviewTitle}</p>
      <img src="starts.png" alt="" />
      <p>{review}</p>
      <p>- {name}</p>
    </div>
  );
}
