import "./whyus.scss"
const Whyus = () => {
    return (
        <section className="whyus">
            <h2>Why us</h2>
            <section className="whyus-grid">
                <div className="whyus-item description">
                    <h1>The best early<br />learning experience</h1>
                    <p>Fermentum nunc tortor, mauris lorem dignissim augue et vestibulum aliquet est ultrices mauris adipiscing.</p>
                    <ul>
                        <li>Holistic approach</li>
                        <li>Passionate teachers</li>
                        <li>Supervision to keep children</li>
                    </ul>
                </div>
                <div className="whyus-item spcial">
                    <section className="cart-grid">
                        <div className="cart-item">
                            <h5>Kindness</h5>
                            <p>
                                Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis
                            </p>
                        </div>
                        <div className="cart-item">
                            <h5>Emotional</h5>
                            <p>
                                Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis
                            </p>
                        </div>
                        <div className="cart-item">
                            <h5>Creativity</h5>
                            <p>
                                Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis
                            </p>
                        </div>
                        <div className="cart-item">
                            <h5>Innovation</h5>
                            <p>
                                Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default Whyus;
