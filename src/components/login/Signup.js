import React from 'react'

const Signup = () => {
	return (
		<div id="signup-page" className='m-6'>
			<p className='font-body font-semibold text-2xl'>Create Your account</p>
			<form className='flex flex-col justify-center'>
				<input
					type="text"
					placeholder="Name"
					className="i input input-bordered input-primary  mt-6"
					required />
				<input
					type="text"
					placeholder="User Id"
					className="input input-bordered input-primary  mt-6"
					required />
				<input
					type="email"
					placeholder="Email"
					className="input input-bordered input-primary  mt-6"
					required />

				<label className="form-control">
					<div className="label">
						<span className="label-text">What is your age?</span>
					</div>
					<input type="date" placeholder="Type here" className="input input-primary input-bordered" />
				</label>
				<input
					type="password"
					placeholder="password"
					className="input input-bordered input-primary  mt-6"
					required />
				<button className='bg-primary font-body text-white p-3  rounded-full mt-10'>Sign up</button>
			</form>
		</div>
	)
}

export default Signup