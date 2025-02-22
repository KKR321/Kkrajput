import { AddSuffixes, ReplaceTypeRecurcive, FilterTypeRecursive, FilterNotTypeRecursive, FlattenForIntellisense } from './../utils/types';
import { Paths } from '../utils/types';
export type Plural = number;

export type LocalizationSchema = {
    lang: string,
    common: {
        and: string,
        accept: string,
        start: string,
        continue: string,
        continueAnyway: string,
        back: string,
        logout: string,
        logoutFrom: string,
        cancel: string,
        balance: string,
        totalBalance: string,
        walletAddress: string,
        recipientAddress: string,
        recipient: string,
        copy: string,
        copiedAlert: string,
        copied: string,
        share: string,
        send: string,
        yes: string,
        no: string,
        amount: string,
        today: string,
        yesterday: string,
        comment: string,
        products: string,
        confirm: string,
        soon: string,
        in: string,
        max: string,
        close: string,
        delete: string,
        apply: string,
        domainOrAddress: string,
        domainOrAddressOrContact: string,
        domain: string,
        search: string,
        termsOfService: string,
        privacyPolicy: string,
        apy: string,
        tx: string,
        add: string,
        connect: string,
        gotIt: string,
        error: string,
        wallet: string,
        wallets: string,
        later: string,
        select: string,
        show: string,
        hide: string,
        showAll: string,
        hideAll: string,
        done: string,
        mainWallet: string,
        walletName: string,
        from: string,
        to: string,
        transaction: string,
        somethingWentWrong: string,
        checkInternetConnection: string,
        reload: string,
        errorOccurred: string,
        recent: string,
        ok: string,
        attention: string,
        save: string,
        assets: string,
        message: string,
        messages: string,
        airdrop: string,
        myWallets: string,
        showMore: string,
        balances: string,
        loading: string,
        notFound: string,
        unverified: string,
        addressBook: string,
        gasless: string,
        address: string,
        currencyChanged: string,
        required: string,
    },
    syncStatus: {
        connecting: string,
        updating: string,
        online: string
    },
    home: {
        home: string,
        history: string,
        browser: string,
        more: string
    }
    settings: {
        title: string,
        backupKeys: string,
        holdersAccounts: string,
        migrateOldWallets: string,
        termsOfService: string,
        privacyPolicy: string,
        developerTools: string,
        spamFilter: string,
        primaryCurrency: string,
        experimental: string,
        support: {
            title: string,
            telegram: string,
            form: string,
            holders: string,
            tonhub: string,
        },
        telegram: string,
        rateApp: string,
        deleteAccount: string,
        theme: string,
        searchEngine: string,
        language: string
    },
    theme: {
        title: string,
        light: string,
        dark: string,
        system: string,
    },
    wallet: {
        sync: string,
        balanceTitle: string,
        actions: {
            receive: string,
            send: string,
            buy: string,
            swap: string,
            deposit: string
        },
        empty: {
            message: string,
            receive: string,
            description: string,
        },
        pendingTransactions: string
    },
    transactions: {
        title: string,
        history: string,
    },
    tx: {
        sending: string,
        sent: string,
        received: string,
        bounced: string,
        tokenTransfer: string,
        airdrop: string,
        failed: string,
        timeout: string,
        batch: string
    },
    txPreview: {
        sendAgain: string,
        blockchainFee: string,
        blockchainFeeDescription: string,
    },
    receive: {
        title: string,
        subtitle: string,
        share: {
            title: string,
            error: string
        },
        holdersJettonWarning: string,
        assets: string,
        fromExchange: string,
        otherCoins: string,
        deposit: string
    },
    transfer: {
        title: string,
        titleAction: string,
        confirm: string,
        error: {
            invalidAddress: string,
            invalidAddressMessage: string,
            invalidAmount: string,
            invalidDomain: string,
            invalidDomainString: string,
            sendingToYourself: string,
            zeroCoins: string,
            zeroCoinsAlert: string,
            notEnoughCoins: string,
            addressIsForTestnet: string,
            addressCantReceive: string,
            addressIsNotActive: string
            addressIsNotActiveDescription: string,
            invalidTransaction: string,
            invalidTransactionMessage: string,
            memoRequired: string,
            holdersMemoRequired: string,
            memoChange: string,
            gaslessFailed: string,
            gaslessFailedMessage: string,
            gaslessFailedEstimate: string,
            gaslessCooldown: string,
            gaslessCooldownTitle: string,
            gaslessCooldownWait: string,
            gaslessCooldownPayTon: string,
            gaslessNotEnoughFunds: string,
            gaslessNotEnoughFundsMessage: string,
            gaslessTryLater: string,
            gaslessTryLaterMessage: string,
            gaslessNotEnoughCoins: string,
            notEnoughJettons: string,
            jettonChange: string,
            notEnoughGasTitle: string,
            notEnoughGasMessage: string,
        },
        changeJetton: string,
        sendAll: string,
        scanQR: string,
        sendTo: string,
        fee: string,
        feeEmpty: string,
        feeTitle: string,
        feeTotalTitle: string,
        purpose: string,
        comment: string,
        commentDescription: string,
        commentRequired: string,
        commentLabel: string,
        checkComment: string,
        confirmTitle: string,
        confirmManyTitle: string,
        unknown: string,
        moreDetails: string,
        gasFee: string,
        contact: string,
        firstTime: string,
        requestsToSign: string,
        smartContract: string,
        txsSummary: string,
        txsTotal: string,
        gasDetails: string,
        jettonGas: string,
        unusualJettonsGas: string,
        unusualJettonsGasTitle: string,
        unusualJettonsGasMessage: string,
        addressNotActive: string,
        wrongJettonTitle: string,
        wrongJettonMessage: string,
        notEnoughJettonsTitle: string,
        notEnoughJettonsMessage: string,
        aboutFees: string,
        aboutFeesDescription: string,
        gaslessTransferSwitch: string
    },
    auth: {
        phoneVerify: string,
        phoneNumber: string,
        phoneTitle: string
        phoneSubtitle: string,
        codeTitle: string,
        codeSubtitle: string,
        codeHint: string,
        title: string,
        message: string,
        hint: string,
        action: string,
        expired: string,
        failed: string,
        completed: string,
        authorized: string,
        authorizedDescription: string,
        noExtensions: string,
        noApps: string,
        name: string,
        yourWallet: string,
        revoke: {
            title: string,
            message: string,
            action: string
        },
        apps: {
            title: string,
            delete: {
                title: string,
                message: string
            },
            description: string,
            installExtension: string,
            moreWallets: string,
            connectionSecureDescription: string
        },
        consent: string,
    },
    install: {
        title: string,
        message: string,
        action: string
    },
    sign: {
        title: string,
        message: string,
        hint: string,
        action: string
    },
    migrate: {
        title: string,
        subtitle: string,
        inProgress: string,
        transfer: string,
        check: string,
        keyStoreTitle: string,
        keyStoreSubtitle: string,
        failed: string,
    },
    qr: {
        title: string,
        requestingPermission: string,
        noPermission: string,
        requestPermission: string,
        failedToReadFromImage: string
    },
    products: {
        addNew: string,
        tonConnect: {
            errors: {
                connection: string,
                invalidKey: string,
                invalidSession: string,
                invalidTestnetFlag: string,
                alreadyCompleted: string,
                unknown: string
            },
            successAuth: string
        },
        savings: string,
        accounts: string,
        services: string,
        oldWallets: {
            title: string,
            subtitle: string
        },
        transactionRequest: {
            title: string,
            subtitle: string,
            groupTitle: string,
            wrongNetwork: string,
            wrongFrom: string,
            invalidFrom: string,
            noConnection: string,
            expired: string,
            invalidRequest: string,
            failedToReport: string,
            failedToReportCanceled: string,
        },
        signatureRequest: {
            title: string,
            subtitle: string
        },
        staking: {
            earnings: string,
            title: string,
            balance: string,
            subtitle: {
                join: string,
                rewards: string,
                apy: string,
                joined: string,
                devPromo: string
            },
            nextCycle: string,
            cycleNote: string,
            cycleNoteWithdraw: string,
            buttonTitle: string,
            balanceTitle: string,
            actions: {
                top_up: string,
                deposit: string,
                withdraw: string,
                calc: string,
                swap: string
            },
            pools: {
                title: string,
                active: string,
                best: string,
                alternatives: string,
                private: string,
                restrictedTitle: string,
                restrictedMessage: string,
                viewClub: string,
                nominators: string,
                nominatorsDescription: string,
                club: string,
                clubDescription: string,
                team: string,
                teamDescription: string,
                joinClub: string,
                joinTeam: string,
                clubBanner: string,
                clubBannerLearnMore: string,
                clubBannerDescription: string,
                teamBanner: string,
                teamBannerLearnMore: string,
                teamBannerDescription: string,
                epnPartners: string,
                epnPartnersDescription: string,
                moreAboutEPN: string,
                lockups: string,
                lockupsDescription: string,
                tonkeeper: string,
                tonkeeperDescription: string,
                liquid: string,
                liquidDescription: string,
                rateTitle: string,
            },
            transfer: {
                stakingWarning: string,
                depositStakeTitle: string,
                depositStakeConfirmTitle: string,
                withdrawStakeTitle: string,
                withdrawStakeConfirmTitle: string,
                topUpTitle: string,
                topUpConfirmTitle: string,
                notEnoughStaked: string,
                confirmWithdraw: string,
                confirmWithdrawReady: string,
                restrictedTitle: string,
                restrictedMessage: string,
                notEnoughCoinsFee: string,
                notEnoughCoins: string,
                ledgerSignText: string
            },
            join: {
                title: string,
                message: string,
                buttonTitle: string,
                moreAbout: string,
                earn: string,
                onYourTons: string,
                yearly: string,
                apy: string,
                cycle: string,
                ownership: string,
                withdraw: string,
                successTitle: string,
                successEtimation: string,
                successNote: string
            },
            pool: {
                balance: string,
                members: string,
                profitability: string
            },
            empty: {
                message: string
            },
            pending: string,
            withdrawStatus: {
                pending: string,
                ready: string,
                withdrawNow: string
            },
            depositStatus: {
                pending: string
            },
            withdraw: string,
            sync: string,
            unstake: {
                title: string,
                message: string
            },
            unstakeLiquid: {
                title: string,
                message: string
            },
            learnMore: string,
            moreInfo: string,
            calc: {
                yearly: string,
                monthly: string,
                daily: string,
                note: string,
                text: string,
                yearlyTopUp: string,
                yearlyTotal: string,
                yearlyCurrent: string,
                topUpTitle: string,
                goToTopUp: string,
            },
            info: {
                rate: string,
                rateTitle: string,
                frequency: string,
                frequencyTitle: string,
                minDeposit: string,
                poolFee: string,
                poolFeeTitle: string,
                depositFee: string,
                withdrawFee: string,
                withdrawRequestFee: string,
                withdrawCompleteFee: string,
                depositFeeDescription: string,
                withdrawFeeDescription: string,
                withdrawCompleteDescription: string,
                blockchainFee: string,
                cooldownTitle: string,
                cooldownActive: string,
                cooldownInactive: string,
                cooldownDescription: string,
                cooldownAlert: string,
                lockedAlert: string
            },
            minAmountWarning: string,
            tryAgainLater: string,
            banner: {
                estimatedEarnings: string,
                estimatedEarningsDev: string,
                message: string
            },
            activePools: string,
            analytics: {
                operations: string,
                operationsDescription: string,
                analyticsTitle: string,
                analyticsSubtitle: string,
                labels: {
                    week: string,
                    month: string,
                    year: string,
                    allTime: string
                }
            }
        },
        holders: {
            title: string,
            loadingLongerTitle: string,
            loadingLonger: string,
            accounts: {
                title: string,
                prepaidTitle: string,
                account: string,
                basicAccount: string,
                proAccount: string,
                noCards: string,
                prepaidCard: string,
                prepaidCardDescription: string,
                hiddenAccounts: string,
                hiddenCards: string,
                primaryName: string,
                paymentName: string,
                topUp: string,
                addNew: string
            },
            pageTitles: {
                general: string,
                card: string,
                cardDetails: string,
                cardCredentials: string,
                cardLimits: string,
                cardLimitsDefault: string,
                cardDeposit: string,
                transfer: string,
                cardSmartContract: string,
                setUpCard: string,
                pin: string
            },
            card: {
                card: string,
                cards: string,
                title: string,
                defaultSubtitle: string,
                defaultTitle: string,
                eurSubtitle: string,
                type: {
                    physical: string,
                    virtual: string,
                },
                notifications: {
                    type: {
                        card_ready: string,
                        deposit: string,
                        charge: string,
                        charge_failed: string,
                        limits_change: {
                            pending: string,
                            completed: string,
                        },
                        card_withdraw: string,
                        contract_closed: string,
                        card_block: string,
                        card_freeze: string,
                        card_unfreeze: string,
                        card_paid: string,
                    },
                    category: {
                        deposit: string,
                        charge: string,
                        charge_failed: string,
                        card_withdraw: string,
                        other: string,
                    },
                    status: {
                        charge_failed: {
                            limit: {
                                onetime: string,
                                daily: string,
                                monthly: string,
                            },
                            failed: string,
                        },
                        completed: string,
                    }
                }
            },
            confirm: {
                title: string,
                message: string,
            },
            enroll: {
                poweredBy: string,
                description_1: string,
                description_2: string,
                description_3: string,
                moreInfo: string,
                buttonSub: string,
                failed: {
                    title: string,
                    noAppData: string,
                    noDomainKey: string,
                    createDomainKey: string,
                    fetchToken: string,
                    createSignature: string,
                },
            },
            otpBanner: {
                title: string,
                accept: string,
                decline: string,
                expired: string
            },
            banner: {
                fewMore: string,
                ready: string,
                readyAction: string,
                kycAction: string
                emailAction: string,
                failedAction: string
            }
        }
    }
    welcome: {
        title: string,
        titleDev: string,
        subtitle: string,
        subtitleDev: string,
        createWallet: string,
        importWallet: string,
        slogan: string,
        sloganDev: string,
        slide_1: {
            title: string,
            subtitle: string,
        },
        slide_2: {
            title: string,
            subtitle: string,
        },
        slide_3: {
            title: string,
            subtitle: string,
        },
    },
    legal: {
        title: string,
        subtitle: string,
        create: string,
        createSubtitle: string,
        privacyPolicy: string,
        termsOfService: string
    },
    create: {
        addNew: string,
        inProgress: string,
        backupTitle: string,
        backupSubtitle: string,
        okSaved: string,
        copy: string
    },
    import: {
        title: string,
        subtitle: string,
        fullSeedPlaceholder: string,
        fullSeedPaste: string
    },
    secure: {
        title: string,
        titleUnprotected: string,
        subtitle: string,
        subtitleUnprotected: string,
        subtitleNoBiometrics: string,
        messageNoBiometrics: string,
        protectFaceID: string,
        protectTouchID: string,
        protectBiometrics: string,
        protectPasscode: string,
        upgradeTitle: string,
        upgradeMessage: string,
        allowUpgrade: string,
        backup: string,
        onLaterTitle: string,
        onLaterMessage: string,
        onLaterButton: string,
        onBiometricsError: string,
        lockAppWithAuth: string,
        methodPasscode: string,
        passcodeSetupDescription: string
    },
    backup: {
        title: string,
        subtitle: string
    },
    backupIntro: {
        title: string,
        subtitle: string,
        saved: string,
        goToBackup: string,
    }
    errors: {
        incorrectWords: {
            title: string,
            message: string
        },
        secureStorageError: {
            title: string,
            message: string
        },
        title: string,
        invalidNumber: string,
        codeTooManyAttempts: string,
        codeInvalid: string,
        unknown: string,
    },
    confirm: {
        logout: {
            title: string,
            message: string
        },
        changeCurrency: string
    },
    neocrypto: {
        buttonTitle: string,
        alert: {
            title: string,
            message: string
        },
        title: string,
        description: string,
        doNotShow: string,
        termsAndPrivacy: string,
        confirm: {
            title: string,
            message: string
        },
    },
    known: {
        deposit: string,
        depositOk: string,
        withdraw: string,
        withdrawAll: string,
        withdrawLiquid: string,
        withdrawCompleted: string,
        withdrawRequested: string,
        upgrade: string,
        upgradeOk: string,
        cashback: string,
        tokenSent: string,
        tokenReceived: string,
        holders: {
            topUpTitle: string,
            accountTopUp: string,
            accountJettonTopUp: string,
            limitsChange: string,
            limitsTitle: string,
            limitsOneTime: string,
            limitsDaily: string,
            limitsMonthly: string,
            accountLimitsChange: string
        }
    },
    jetton: {
        token: string,
        productButtonTitle: string,
        productButtonSubtitle: string,
        hidden: string,
        liquidPoolDescriptionDedust: string,
        liquidPoolDescriptionStonFi: string,
        emptyBalance: string,
        jettonsNotFound: string,
    },
    connections: {
        extensions: string,
        connections: string
    },
    accounts: {
        active: string,
        noActive: string,
        disabled: string,
        alertActive: string,
        alertDisabled: string,
        description: string,
        noAccounts: string,
    },
    spamFilter: {
        minAmount: string,
        dontShowComments: string,
        minAmountDescription: string,
        applyConfig: string,
        denyList: string,
        denyListEmpty: string,
        unblockConfirm: string,
        blockConfirm: string,
        description: string
    },
    security: {
        title: string,
        passcodeSettings: {
            setupTitle: string,
            confirmTitle: string,
            changeTitle: string,
            resetTitle: string,
            resetDescription: string,
            resetAction: string,
            error: string,
            tryAgain: string,
            success: string,
            enterNew: string,
            confirmNew: string,
            enterCurrent: string,
            enterPrevious: string,
            enterNewDescription: string,
            changeLength: string,
            forgotPasscode: string,
            logoutAndReset: string,
        }
        auth: {
            biometricsPermissionCheck: {
                title: string,
                message: string,
                openSettings: string,
                authenticate: string,
            },
            biometricsSetupAgain: {
                title: string,
                message: string,
                setup: string,
                authenticate: string,
            },
            biometricsCooldown: {
                title: string,
                message: string,
            },
            biometricsCorrupted: {
                title: string,
                message: string,
                messageLogout: string,
                logout: string,
                restore: string,
            },
            canceled: {
                title: string,
                message: string,
            },
        }
    },
    report: {
        title: string,
        scam: string,
        bug: string,
        spam: string,
        offense: string,
        posted: string,
        error: string,
        message: string,
        reason: string
    },
    review: {
        title: string,
        rating: string,
        review: string,
        heading: string,
        posted: string,
        postedDescription: string,
        error: string
    },
    deleteAccount: {
        title: string,
        action: string,
        logOutAndDelete: string,
        description: string,
        complete: string,
        error: {
            hasNfts: string,
            fetchingNfts: string,
            hasUSDTBalanceTitle: string,
            hasUSDTBalanceMessage: string
        },
        confirm: {
            title: string,
            message: string
        },
        checkRecipient: string,
        checkRecipientDescription: string,
    },
    logout: {
        title: string,
        logoutDescription: string,
    },
    contacts: {
        title: string,
        contact: string,
        contacts: string,
        unknown: string,
        name: string,
        lastName: string,
        company: string,
        add: string,
        edit: string,
        save: string,
        notes: string,
        alert: {
            name: string,
            nameDescription: string,
            notes: string,
            notesDescription: string
        },
        delete: string,
        empty: string,
        description: string,
        contactAddress: string,
        search: string,
        new: string
    },
    currency: {
        USD: string,
        EUR: string,
        RUB: string,
        GBP: string,
        CHF: string,
        CNY: string,
        KRW: string,
        IDR: string,
        INR: string,
        JPY: string,
    },
    txActions: {
        addressShare: string,
        addressContact: string,
        addressContactEdit: string,
        addressMarkSpam: string
        txShare: string,
        txRepeat: string,
        view: string,
        share: {
            address: string,
            transaction: string
        }
    },
    hardwareWallet: {
        ledger: string,
        title: string,
        description: string,
        installationIOS: string,
        installationAndroid: string,
        installationGuide: string,
        connectionDescriptionAndroid: string,
        connectionDescriptionIOS: string,
        connectionHIDDescription_1: string,
        connectionHIDDescription_2: string,
        bluetoothScanDescription_1: string,
        bluetoothScanDescription_2: string,
        bluetoothScanDescription_3: string,
        bluetoothScanDescription_3_and: string,
        bluetoothScanDescription_4_and: string,
        chooseAccountDescription: string,
        openTheAppDescription: string,
        unlockLedgerDescription: string,
        openAppVerifyAddress: string,
        devices: string,
        connection: string,
        actions: {
            connect: string,
            selectAccount: string,
            account: string,
            loadAddress: string,
            connectHid: string,
            connectBluetooth: string,
            scanBluetooth: string,
            confirmOnLedger: string,
            sending: string,
            sent: string,
            mainAddress: string,
            givePermissions: string,
        },
        confirm: {
            add: string,
            remove: string
        },
        errors: {
            bleTitle: string,
            noDevice: string,
            appNotOpen: string,
            turnOnBluetooth: string,
            lostConnection: string,
            transactionNotFound: string,
            transactionRejected: string,
            transferFailed: string,
            permissions: string,
            unknown: string,
            reboot: string,
            turnOnLocation: string,
            locationServicesUnauthorized: string,
            bluetoothScanFailed: string
        },
        moreAbout: string
    },
    devTools: {
        switchNetwork: string,
        switchNetworkAlertTitle: string,
        switchNetworkAlertMessage: string,
        switchNetworkAlertAction: string,
        copySeed: string,
        copySeedAlertTitle: string,
        copySeedAlertMessage: string,
        copySeedAlertAction: string,
        holdersOfflineApp: string,
    },
    wallets: {
        choose_versions: string;
        switchToAlertTitle: string,
        switchToAlertMessage: string,
        switchToAlertAction: string,
        addNewTitle: string,
        addNewAlertTitle: string,
        addNewAlertMessage: string,
        addNewAlertAction: string,
        alreadyExistsAlertTitle: string,
        alreadyExistsAlertMessage: string,
        settings: {
            changeAvatar: string,
            selectAvatarTitle: string,
            selectColorTitle: string,
        }
    },
    webView: {
        checkInternetAndReload: string,
        contactSupportOrTryToReload: string,
        contactSupport: string,
    },
    appAuth: {
        description: string,
    },
    screenCapture: {
        title: string,
        description: string,
        action: string,
    },
    onboarding: {
        avatar: string,
        wallet: string,
        price: string
    },
    newAddressFormat: {
        title: string,
        fragmentTitle: string,
        learnMore: string,
        shortDescription: string,
        description_0_0: string,
        description_0_link: string,
        description_0_1: string,
        title_1: string,
        description_1: string,
        title_2: string,
        description_2: string,
        title_3: string,
        description_3: string,
        description_4: string
        action: string,
        oldAddress: string,
        newAddress: string,
        bannerTitle: string,
        bannerDescription: string,
    },
    changelly: {
        bannerTitle: string,
        bannerDescription: string
    }
    w5: {
        banner: {
            title: string,
            description: string,
        },
        update: {
            title: string,
            subtitle_1: string,
            description_1: string,
            subtitle_2: string,
            description_2: string,
            subtitle_3: string,
            description_3: string,
            switch_button: string,
        },
        gaslessInfo: string
    }
    browser: {
        listings: {
            categories: {
                other: string,
                exchange: string,
                defi: string,
                nft: string,
                games: string,
                social: string,
                utils: string,
                services: string,
            },
            title: string
        },
        refresh: string,
        back: string,
        forward: string,
        share: string,
        search: {
            placeholder: string,
            invalidUrl: string,
            urlNotReachable: string,
            suggestions: {
                web: string,
                ddg: string,
                google: string
            }
        },
        alertModal: {
            message: string,
            action: string
        }
    },
    swap: {
        title: string,
        description: string,
        termsAndPrivacy: string,
        dontShowTitle: string,
    },
    mandatoryAuth: {
        title: string,
        description: string,
        alert: string,
        confirmDescription: string,
        action: string,
        settingsDescription: string
    },
    update: {
        callToAction: string,
    },
    savings: {
        ton: string,
        usdt: string,
    },
    spending: {
        ton: string,
        usdt: string
    }
};

export type LocalizedResources = Paths<LocalizationSchema, string>;
export type LocalizedPluralsResources = Paths<LocalizationSchema, Plural>;

export type Pluralize<T, P extends string> = AddSuffixes<ReplaceTypeRecurcive<FilterTypeRecursive<T, Plural>, Plural, string>, P>;
export type PrepareSchema<T, P extends string> = FlattenForIntellisense<FilterNotTypeRecursive<T, Plural> & Pluralize<LocalizationSchema, P>>;