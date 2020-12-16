# ./features/invalid-lapor.feature

Feature: Lapor
    As a user
    I can't give report on website

    Scenario: Can't give report
        Given user halaman lapor
        And user melakukan login
        And user pilih tipe laporan
        And user isi judul laporan
        And user isi sedikit terkait laporan
        And user isi tanggal laporan
        And user mengosongkan lokasi
        And user mengosongkan instansi
        And user mengosongkan kategori laporan
        When user klik lapor
        Then user gagal melapor
        # Then user back to homepage
