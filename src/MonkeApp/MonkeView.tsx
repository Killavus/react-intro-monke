const MonkeView = ({ image }: { image: string }) => {
  return <img className="monkeView" src={`/${image}`} alt="Czy maupa fajna?" />;
};

export default MonkeView;
