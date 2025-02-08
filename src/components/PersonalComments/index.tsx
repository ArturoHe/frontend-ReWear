type Props = {
  userImage: string;
  userName: string;
  comment: string;
};

function index({ userImage, userName, comment }: Props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 d-none d-sm-block">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="shadow"
              src={userImage}
              alt=""
              style={{
                borderRadius: "50%",
                height: "8rem",
                width: "8rem",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-xs-2 mx-auto">
            <div className="text-center pt-3">{userName}</div>
          </div>
        </div>

        <div className="d-block d-sm-none p-0 m-0">{userName}</div>
        <div
          className="col-lg-10 col-md-9 col-sm-8 col-12 shadow"
          style={{
            backgroundColor: "rgba(10, 112, 65, 0.5)",
            borderRadius: "30px",
            padding: "1rem",
          }}
        >
          <div className="py-5">{comment}</div>
        </div>
      </div>
    </div>
  );
}

export default index;
