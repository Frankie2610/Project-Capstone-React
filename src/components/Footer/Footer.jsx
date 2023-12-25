import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div id="contact" className={styles.bgStyle}>
      <div className={`${styles.bgContainer} ${styles.defaultFontStyle}`}>
        <div className="row">
          <div className="col-md-4 col-sm-6 mt-5">
            <h6 className={styles.subTitle}>TIX</h6>
            <div className="row mt-3">
              <div className="col-6">
                <a className={styles.fontStyle1}>FAQ</a>
              </div>
              <div className="col-6">
                <a className={styles.fontStyle1}>Thỏa thuận sử dụng</a>
              </div>
              <div className="col-6">
                <a className={styles.fontStyle1}>Brand Guidelines</a>
              </div>
              <div className="col-6">
                <a className={styles.fontStyle1}>Chính sách bảo mật</a>
              </div>
            </div>
            <div className="col-sm-12 d-md-none mt-5">
              <div className="row"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mt-5">
            <h6 className={styles.subTitle}>ĐỐI TÁC</h6>
            <div className="row mt-3">
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.cgv.vn/"
                  className="jss148"
                  rel="noreferrer"
                >
                  <img
                    src="/img/CGV.png"
                    className={styles.logoStyle}
                    alt="cgvlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.bhdstar.vn/"
                  className="jss148"
                  rel="noreferrer"
                >
                  <img
                    src="/img/BHD.png"
                    className={styles.logoStyle}
                    alt="bhdlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.galaxycine.vn/"
                  className="jss148"
                  rel="noreferrer"
                >
                  <img
                    src="img/Galaxy.png"
                    className={styles.logoStyle}
                    alt="galaxylogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="http://cinestar.com.vn/"
                  className="jss148"
                  rel="noreferrer"
                >
                  <img
                    src="img/CineStar.png"
                    className={styles.logoStyle}
                    alt="starlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="http://lottecinemavn.com/LCHS/index.aspx"
                  className="jss148"
                  rel="noreferrer"
                >
                  <img
                    src="https://tcdtist-tix-clone.vercel.app/static/media/footer-icon-5.08167da6.png"
                    className={styles.logoStyle}
                    alt="lottelogo"
                  />
                </a>
              </div>
              <div className={`col-3 mb-3 ${styles.logoStyssle}`}>
                <a
                  target="_blank"
                  href="https://www.megagscinemas.vn/"
                  className="jss148"
                  rel="noreferrer"
                >
                  <img
                    src="img/megaGS.png"
                    className={styles.logoStyle}
                    alt="megalogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.betacinemas.vn/home.htm"
                  rel="noreferrer"
                >
                  <img
                    className={styles.logoStyle}
                    src="img/Beta.jpeg"
                    alt="betalogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a target="_blank" href="http://ddcinema.vn/" rel="noreferrer">
                  <img
                    src="img/DDC.png"
                    className={styles.logoStyle}
                    alt="ddclogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://touchcinema.com/"
                  rel="noreferrer"
                >
                  <img
                    src="img/Touch.png"
                    className={styles.logoStyle}
                    alt="touchlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://cinemaxvn.com/"
                  rel="noreferrer"
                >
                  <img
                    src="img/CinemaX.jpeg"
                    className={styles.logoStyle}
                    alt="cinemaxlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://starlight.vn/"
                  rel="noreferrer"
                >
                  <img
                    src="img/StarLight.png"
                    className={styles.logoStyle}
                    alt="starlightlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.dcine.vn/"
                  rel="noreferrer"
                >
                  <img
                    src="https://tcdtist-tix-clone.vercel.app/static/media/icon-footer-12.6b4821d0.png"
                    className={styles.logoStyle}
                    alt="dcinelogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a target="_blank" href="https://zalopay.vn/" rel="noreferrer">
                  <img
                    src="img/ZaloPay.png"
                    className={styles.logoStyle}
                    alt="zalologo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.payoo.vn/"
                  rel="noreferrer"
                >
                  <img
                    src="img/payoo.png"
                    className={styles.logoStyle}
                    alt="payoologo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                  rel="noreferrer"
                >
                  <img
                    src="img/vietcombank.png"
                    className={styles.logoStyle}
                    alt="vietcombanklogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.agribank.com.vn/"
                  rel="noreferrer"
                >
                  <img
                    src="img/Agribank.png"
                    className={styles.logoStyle}
                    alt="agribanklogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.vietinbank.vn/web/home/vn/index.html"
                  rel="noreferrer"
                >
                  <img
                    src="img/Vietinbank.png"
                    className={styles.logoStyle}
                    alt="Viettinbanklogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://www.indovinabank.com.vn/"
                  rel="noreferrer"
                >
                  <img
                    src="img/StarLight.png"
                    className={styles.logoStyle}
                    alt="ivblogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a
                  target="_blank"
                  href="https://webv3.123go.vn/"
                  rel="noreferrer"
                >
                  <img
                    src="img/bachamlogo.png"
                    className={styles.logoStyle}
                    alt="bachamlogo"
                  />
                </a>
              </div>
              <div className="col-3 mb-3">
                <a target="_blank" href="https://laban.vn/" rel="noreferrer">
                  <img
                    src="img/labanlogo.jpeg"
                    className={styles.logoStyle}
                    alt="labanlogo"
                  />
                </a>
              </div>
            </div>
            <p />
          </div>
          <div className="col-4 d-none d-md-block mt-5">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h6 className={styles.subTitle}>MOBILE APP</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                      rel="noreferrer"
                    >
                      <img
                        src="/img/appeLogo.png"
                        className={styles.logoStyle}
                        alt="appleLogo"
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                      rel="noreferrer"
                    >
                      <img
                        alt="androidLogo"
                        src="/img/androidLogo.png"
                        className={styles.logoStyle}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <h6 className={styles.subTitle}>SOCIAL</h6>
                <div className="row mt-3">
                  <div className="col-6">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                      rel="noreferrer"
                    >
                      <img
                        alt="facebookLogo"
                        src="/img/facebookLogo.png"
                        className={styles.logoStyle}
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                      rel="noreferrer"
                    >
                      <img
                        className={styles.logoStyle}
                        alt="zaloLogo"
                        src="/img/zaloLogo.png"
                        width={30}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hrStyle} />
        <div className="row text-center">
          <div className="col-sm-2">
            <img
              className={`${styles.daThongBao} mb-3`}
              alt="zizonLogo"
              src="/img/Zion.jpeg"
              width={100}
            />
          </div>
          <div className="col-sm-8">
            <h6 className={styles.fontStyle3}>
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </h6>
            <h6 className={styles.fontStyle3}>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </h6>
            <h6 className={styles.fontStyle3}>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
            </h6>
            <h6 className={styles.fontStyle3}>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </h6>
            <h6 className={styles.fontStyle3}>
              Số Điện Thoại (Hotline): 1900 545 436
            </h6>
          </div>
          <div className="col-sm-2">
            <img
              className={styles.daThongBao}
              alt="daThongBaoLogo"
              src="/img/daThongBao.png"
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
