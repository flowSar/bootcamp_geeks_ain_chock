(function (childrenNumber, partnerName, geographicLocation, job) {
  console.log(
    `You will be a ${job} in ${geographicLocation}, and married to ${partnerName} with ${childrenNumber} kids.`
  );
})(
  (childrenNumber = 2),
  (partnerName = "Sarah"),
  (geographicLocation = "Los Angeles, California, USA"),
  (job = "Software engineering")
);
