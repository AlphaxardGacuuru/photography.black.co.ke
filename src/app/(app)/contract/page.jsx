import React from 'react'

const Contract = () => {
	return (
		<div className="sonar-call-to-action-area section-padding-0-100">
			{/* <!-- ***** Call to Action Area Start ***** --> */}
			<div className="backEnd-content">
				<h2 style={{ color: "rgba(255, 255, 255, 0.1)" }}>Contract</h2>
			</div>
			<br />
			<br />

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="contact-form text-center call-to-action-content wow fadeInUp" data-wow-delay="0.5s">
							<img src="img/bg-img/havi logos-1.png" width="500em" height="auto" />
							<h2>Contract</h2>
							<br />
							<div className="form-group">
								<form>
									<input
										type="text"
										name="name"
										className="form-control"
										placeholder="Name"
										required={true} />
									<br />
									<br />

									<select name="package" className="form-control">
										<option defaultValue value="">Select Package</option>
										<option>Wedding Plus</option>
										<option>Wedding Standard</option>
										<option>Wedding Budget</option>
										<option>Engagement Shoot</option>
										<option>Baby bump Shoot</option>
										<option>Family Shoot</option>
									</select>
									<br />

									<div className="form-group text-left">
										<label>Add ons</label>
										<br />
										<h6><input type="checkbox" className="mr-2" />Drone</h6>
										<h6><input type="checkbox" className="mr-2" />Live Streaming</h6>
									</div>

									<div className="text-left">
										<label className="text-left">Date</label>
										<input
											type="date"
											name="date"
											className="form-control"
											placeholder="Released" />
									</div>
									<br />
									<br />

									<div className="text-left">
										<label className="text-left">Duration in days</label>
										<input
											type="number"
											name="duration"
											className="form-control"
											placeholder="Duration" />
									</div>
									<br />
									<br />

									{/* <button className="sonar-btn"></button> */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contract