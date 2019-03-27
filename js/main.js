$(".fas").click(function(event){
	 if ($(this).hasClass("fa-plus")) {
	 	$(this).removeClass("fa-plus");
	 	$(this).addClass("fa-minus");
	 	$(this).siblings(".answer").show();
	 }else {
	 	$(this).removeClass("fa-minus");
	 	$(this).addClass("fa-plus");
	 	$(this).siblings(".answer").hide();
	 }
});

//Info form click next listener
$("#input-info-submit").click(function(event){
	validateInfoForm();
});

//Payment form click purchase listener
$("#input-payment-purchase").click(function(event){
	event.preventDefault();
	validatePaymentForm();
});

function validateInfoForm(){
	var firstName = $("#input-info-firstname").val();
	var lastName = $("#input-info-lastname").val();
	var lawOfSchool = $("#input-info-lawofschool").val();
	var email = $("#input-info-email").val();
	var password = $("#input-info-password").val();

	if (validateInput(firstName, "First Name") && validateInput(lastName, "Last Name") &&
		validateInput(email, "Email") && validateInput(password, "Password")) {
		location = "payment.html";
	}
}

function validatePaymentForm(){
	var cardName = $("#input-payment-cardname").val();
	var cardNumber = $("#input-payment-cardnumber").val();
	var cardExpMonth = $("#select-payment-month").val();
	var cardExpYear = $("#select-payment-year").val();

	location = "complete.html";
}

function validateInput(input, field){
	if (input.length == 0) {
		alert("You must enter " + field);
	}else {
		return true;
	}
}