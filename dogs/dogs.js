let zoom     = $('#zoom-images');
let imgOne   = $('#dogImage');
let imgTwo   = $('#dogImageTwo');
let imgThree = $('#dogImageThree');
let zoomImg  = $('#images');
let caption  = $('#caption');
let close    = $('.closeButton');

imgOne.on('click', function() {
    zoom.css('display', 'block');
    $("#images").attr("src", "https://previews.dropbox.com/p/thumb/ABNXEBQPp6i2mDruiZg-CnocWE7MqKPxcGYJOTa9X9xrDoVpBNu6pPcmf1zV1NRYeNguyGQxDQH6HKq9DVlMzJGZVMwzAyCihenFA_spzXo2KDDBr41iPRV3OqONgl_loa1X06vU20X0KBikdMYLO7FQrvi_0VWredf5dW54jgGmxsOld3uPlnivJYgyc5uX_3_13sTHODeeLnKdWPVoOHWRWnf_9SzWZt9D0w88srDVeBUsp-JiSrAXCAIWqz4tCpY91Ntc-mCQEduUWP7h1Dp5ji7au7VlV4IRPQ_mOCapdm6IrGH6G_dpR6AgCff6Ygb2CDIWlH_PpvydnPdX82NKoIqsqRwCSxr5yHWms-atk2sJ5UVXGi_CRk9Ao2ayRnKwtwr2u-5QZU7vSbXcPDXxZCPtklXIYXrL_j45KoPuEA/p.jpeg?fv_content=true&size_mode=5")
    caption.html(this.alt);
})

imgTwo.on('click', function() {
    zoom.css('display', 'block');
    $("#images").attr("src", "https://previews.dropbox.com/p/thumb/ABNNSTgUHOQrRGxpCQQN6COfA0dsxPzTFsi4O1SXjDCdVayLCwZXjFn-cFLdriK8K3A_gZuNM-XMaakzG1O49bCOimOYKxzKnIVifnM9RzKyq7kpYsUMez9D7v3odkkv4TIpcRhpBHMBr5f_AFFCg95cbfkd7WuZyEYoWhH4E5fDe-j2USLuM24Jfo0eG6rDb41cuLma9IUCCgDmY8Nfq4dK7CKV8sSWq248nr6acbt9P3Jgl2RjUHGF6Ho9jtsft05xfZ5ircZMA7lmaSk9iQr7Rtk7vCdqjAqvtcf3ajSx0mUHTi2qAYj7I61BUjIJmC_dHzYimjnP2EM-W7Ux9FeUg9xnTqIlFE095PZVqJ7Yrw/p.jpeg?fv_content=true&size_mode=5")
    caption.html(this.alt);
})

imgThree.on('click', function() {
    zoom.css('display', 'block');
    $("#images").attr("src", "https://previews.dropbox.com/p/thumb/ABPGUeNFTWJlgD6QC6fmpvcH182LgQzgBy-0gDMfgRsO5CclNKPLS8eCg4WT-5sIqwESdmr0jlBigS8fcLXssvrZmB_UHYjWyYdbvuPlFzW1ZBkgBK1jqkrJEpSkr3OGgrutnZObQp31iOYYBZ8DCqQgC62a7hFEz01ReAem_4iEsm-CNT_nMlqoeH-vpMKkh9Ue1ZwxPtLNg6tgs61U_o8lmc8ZKXWuAma-KIC1swp_jJNjogXsSTiVaM8p3PDxb1Pv4KgEtX-Eugaevw44Pg0EZtbvnjVI-XSRAlodmYZIR-SBYiRL8wdX3J8PgPkn1KJvsHUbq_5qjr0rtJ2Ph34CC5du8zPn4S8ZdW_PuLAVrg/p.jpeg?size=2048x1536&size_mode=3")
    caption.html(this.alt);
})

close.on('click', function() {
    zoom.css('display', 'none');
})
