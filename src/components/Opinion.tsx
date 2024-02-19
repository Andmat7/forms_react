export function Opinion(props: any) {
  const { reviewTitle,review, name } = props;
  return (
    // justify text
    <div className="text-justify py-[40px]">
      <p className="font-medium pb-[10px] text-[19px]">{reviewTitle}</p>
      <img src="starts.png" alt="" />
      <p className="text-[17px] pt-[20px]">{review}</p>
      <p className="pt-[20px]">- {name}</p>
    </div>
  );
}
